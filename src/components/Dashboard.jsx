import React, { useEffect, useState } from "react";
import "./collections.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [activeSection, setActiveSection] = useState("dashboard");
  const nav = useNavigate();
  const userid = localStorage.getItem("userid");

  useEffect(() => {
    if (!userid) { nav("/login"); return; }

    fetch(`https://dummyjson.com/users/${userid}`)
      .then(r => r.json())
      .then(data => {
        setUser(data);
        if (data.address) {
          setAddresses([
            { type: "Home", line1: data.address.address, line2: `${data.address.city}, ${data.address.state} ${data.address.postalCode}` },
            { type: "Work", line1: "45, Tech Park, Sector 7", line2: "Chandigarh, 160001" },
          ]);
        }
      });

    fetch(`https://dummyjson.com/carts/user/${userid}`)
      .then(r => r.json())
      .then(data => {
        if (data.carts?.length) {
          setOrders(data.carts.map((cart, i) => ({
            id: `#${2000 + cart.id}`,
            date: new Date(Date.now() - i * 5 * 86400000).toISOString().split("T")[0],
            items: cart.totalProducts,
            total: `$${cart.total}`,
            status: i % 2 === 0 ? "Delivered" : "Pending",
          })));
        }
      });
  }, []);

  const logout = () => { localStorage.removeItem("userid"); nav("/"); };

  const navItems = ["dashboard", "orders", "addresses", "account details"];
  const delivered = orders.filter(o => o.status === "Delivered").length;
  const pending   = orders.filter(o => o.status === "Pending").length;

  return (
    <div className="db-root">

      <header className="db-header">
        <div className="db-header-left">
          <div className="db-avatar">{user.firstName?.[0]}{user.lastName?.[0]}</div>
          <div>
            <div className="db-header-name">{user.firstName} {user.lastName}</div>
            <div className="db-header-email">{user.email}</div>
          </div>
        </div>
        <nav className="db-tabs">
          {navItems.map(item => (
            <button
              key={item}
              className={`db-tab ${activeSection === item ? "db-tab--active" : ""}`}
              onClick={() => setActiveSection(item)}
            >
              {item.replace(/\b\w/g, c => c.toUpperCase())}
            </button>
          ))}
        </nav>
        <button className="db-logout" onClick={logout}>Logout</button>
      </header>

      <main className="db-main">

        {activeSection === "dashboard" && (
          <>
            <div className="db-welcome">
              <h1 className="db-welcome-title">Hello, {user.firstName} 👋</h1>
              <p className="db-welcome-sub">Here's what's happening with your account.</p>
            </div>

            <div className="db-stats">
              {[
                { label: "Total Orders",    value: orders.length },
                { label: "Delivered",       value: delivered },
                { label: "Pending",         value: pending },
                { label: "Saved Addresses", value: addresses.length },
              ].map(s => (
                <div key={s.label} className="db-stat-card">
                  <span className="db-stat-label">{s.label}</span>
                  <span className="db-stat-value">{s.value}</span>
                </div>
              ))}
            </div>

            <div className="db-card">
              <div className="db-card-header">
                <h2 className="db-card-title">Recent Orders</h2>
                <button className="db-link-btn" onClick={() => setActiveSection("orders")}>View all →</button>
              </div>
              <OrderTable orders={orders.slice(0, 4)} />
            </div>

            <div className="db-two-col">
              <div className="db-card">
                <h2 className="db-card-title">Addresses</h2>
                <div className="db-addr-stack">
                  {addresses.map(a => (
                    <div key={a.type} className="db-addr-row">
                      <span className="db-addr-tag">{a.type}</span>
                      <div>
                        <p className="db-addr-line">{a.line1}</p>
                        <p className="db-addr-line db-muted">{a.line2}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="db-card">
                <h2 className="db-card-title">Account Info</h2>
                <div className="db-detail-list">
                  {[
                    { label: "Username", value: user.username },
                    { label: "Phone",    value: user.phone },
                    { label: "Age",      value: user.age },
                    { label: "Gender",   value: user.gender },
                  ].map(d => (
                    <div key={d.label} className="db-detail-row">
                      <span className="db-detail-label">{d.label}</span>
                      <span className="db-detail-value">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeSection === "orders" && (
          <div className="db-card">
            <h2 className="db-card-title">All Orders</h2>
            <OrderTable orders={orders} />
          </div>
        )}

        {activeSection === "addresses" && (
          <div className="db-card">
            <h2 className="db-card-title">Saved Addresses</h2>
            <div className="db-addr-grid">
              {addresses.map(a => (
                <div key={a.type} className="db-addr-card">
                  <span className="db-addr-tag">{a.type}</span>
                  <p className="db-addr-line">{a.line1}</p>
                  <p className="db-addr-line db-muted">{a.line2}</p>
                </div>
              ))}
              <div className="db-addr-card db-addr-card--add">
                <span className="db-add-plus">+</span>
                <p className="db-muted">Add New Address</p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "account details" && (
          <div className="db-card">
            <div className="db-profile-top">
              <div className="db-avatar db-avatar--lg">{user.firstName?.[0]}{user.lastName?.[0]}</div>
              <div>
                <h2 className="db-card-title" style={{ marginBottom: 4 }}>{user.firstName} {user.lastName}</h2>
                <p className="db-muted">{user.email}</p>
              </div>
            </div>
            <div className="db-detail-grid">
              {[
                { label: "Full Name", value: `${user.firstName} ${user.lastName}` },
                { label: "Email",     value: user.email },
                { label: "Phone",     value: user.phone },
                { label: "Username",  value: user.username },
                { label: "Age",       value: user.age },
                { label: "Gender",    value: user.gender },
              ].map(d => (
                <div key={d.label} className="db-detail-cell">
                  <span className="db-detail-label">{d.label}</span>
                  <span className="db-detail-value">{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

const OrderTable = ({ orders }) =>
  orders.length === 0 ? (
    <p className="db-empty">Loading orders…</p>
  ) : (
    <table className="db-table">
      <thead>
        <tr>{["Order", "Date", "Items", "Total", "Status"].map(h => <th key={h}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {orders.map((o, i) => (
          <tr key={i}>
            <td className="db-order-id">{o.id}</td>
            <td>{o.date}</td>
            <td>{o.items}</td>
            <td>{o.total}</td>
            <td><span className={`db-badge db-badge--${o.status.toLowerCase()}`}>{o.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );

export default Dashboard;