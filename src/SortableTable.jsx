import React, { useState } from "react";

const SortableTable = () => {
  const employees = [
    { name: "Ram", department: "HR", salary: 50000 },
    { name: "Sai", department: "Engineering", salary: 70000 },
    { name: "Krishna", department: "Finance", salary: 60000 },
    { name: "Venish", department: "Engineering", salary: 100000 },
    { name: "Swathi", department: "Marketing", salary: 55000 },
    { name: "Abhi", department: "Sales", salary: 57000 },
    { name: "Preneeth", department: "IT / Information Technology", salary: 78000 },
    { name: "Kiran", department: "Administration", salary: 49000 },
    { name: "Rakesh", department: "Customer Support", salary: 47000 },
    { name: "Bhargav", department: "Product Management", salary: 95000 },
    { name: "Nihal", department: "Legal", salary: 87000 },
  ];

  const [data, setData] = useState(employees);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const styles = {
    container: {
      width: "100%",
      minHeight: "100vh",
      padding: "30px",
      backgroundColor: "#f0f4f8",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      justifyContent: "center",
    },
    tableWrapper: {
      width: "90%", // adds space on left and right
      maxWidth: "1200px",
    },
    title: {
      textAlign: "center",
      fontSize: "36px",
      marginBottom: "30px",
      color: "#333",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "18px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
    },
    th: {
      border: "1px solid #4CAF50",
      padding: "16px",
      textAlign: "center",
      backgroundColor: "#4CAF50",
      color: "white",
      cursor: "pointer",
      userSelect: "none",
    },
    td: {
      border: "1px solid #ddd",
      padding: "16px",
      textAlign: "center",
      color: "#333",
      fontWeight: "500",
    },
    evenRow: { backgroundColor: "#f9f9f9" },
    oddRow: { backgroundColor: "#ffffff" },
    hoverRow: { backgroundColor: "#cce7ff" },
  };

  return (
    <div style={styles.container}>
      <div style={styles.tableWrapper}>
        <h2 style={styles.title}>Employee Data</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th} onClick={() => handleSort("name")}>
                Name {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th style={styles.th} onClick={() => handleSort("department")}>
                Department {sortConfig.key === "department" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th style={styles.th} onClick={() => handleSort("salary")}>
                Salary {sortConfig.key === "salary" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((emp, index) => (
              <tr
                key={index}
                style={index % 2 === 0 ? styles.evenRow : styles.oddRow}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.hoverRow.backgroundColor)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = index % 2 === 0 ? styles.evenRow.backgroundColor : styles.oddRow.backgroundColor)
                }
              >
                <td style={styles.td}>{emp.name}</td>
                <td style={styles.td}>{emp.department}</td>
                <td style={styles.td}>₹{emp.salary.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SortableTable;
