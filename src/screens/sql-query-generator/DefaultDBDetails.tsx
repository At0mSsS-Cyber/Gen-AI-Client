import React, { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";
import TableDisplay from "./TableDisplay";
import { fetchTablesApi, fetchSampleData } from "../../services/sqlAPI";

const DbDetails: React.FC = () => {
  const [tables, setTables] = useState<any>([]);
  const [selectedTable, setSelectedTable] = useState<string>("");
  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState<any[]>([]);

  const fetchTables = async () => {
    try {
      const data = await fetchTablesApi();
      setTables(data?.tables);
    } catch (error) {
      console.error("Error fetching tables:", error);
    }
  };

  useEffect(() => {
    fetchTables();
  }, []);

  const handleTableSelect = async (table: string) => {
    setSelectedTable(table);
    if (table) {
      try {
        const data = await fetchSampleData(table);
        setColumns(data?.columns);
        setRows(data?.rows);
      } catch (error) {
        console.error("Error fetching table data:", error);
      }
    }
  };

  return (
    <div className="">
      <Dropdown tables={tables} onSelect={handleTableSelect} />
      {selectedTable && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">{selectedTable}</h2>
          <TableDisplay columns={columns} rows={rows} />
        </div>
      )}
    </div>
  );
};

export default DbDetails;
