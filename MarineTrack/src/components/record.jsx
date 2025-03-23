import { useState, useEffect } from "react";
import { CButton, CCard, CCardBody, CCardText, CCardTitle } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

const Card = () => {
  const [records, setRecords] = useState([]); 

  useEffect(() => {
    const fetchNewRecord = async () => {
      try {
        const mockData = [
          {
            id: 1,
            title: "New Boat Registration",
            description: "Boat Registration Details from Boat Owners to register their boats.",
            username: "Kamal Silva",
            email: "Kamal@example.com",
            registrationDate: "2025-02-19",
          },
          {
            id: 2,
            title: "New Boat Registration",
            description: "A new boat registration from a boat owner.",
            username: "Nimal",
            email: "nimal@example.com",
            registrationDate: "2025-02-20",
          },
        ];

        
        setTimeout(() => {
          setRecords((prevRecords) => [...prevRecords, mockData[0]]);
        }, 1000); 

        setTimeout(() => {
          setRecords((prevRecords) => [...prevRecords, mockData[1]]);
        }, 3000); 
      } catch (error) {
        console.error("Error fetching new record:", error);
      }
    };

    
    fetchNewRecord();

    
    const intervalId = setInterval(fetchNewRecord, 5000); 

    
    return () => clearInterval(intervalId);
  }, []); 

  if (records.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      {records.map((record) => (
        <CCard key={record.id} style={{ width: "950px", height:"200px" }} className="mb-3">
          <CCardBody style={{ paddingTop: "0", marginTop: "0" }}>
            {}
            <CCardTitle
              style={{
                marginTop: "0",
                paddingTop: "0",
                marginBottom: "5",
                paddingBottom: "1",
              }}
              className="fs-6 m-0"
            >
              {record.title}
            </CCardTitle>

            {}
            <CCardText className="m-0">{record.description}</CCardText>

            {}
            <div style={{ marginTop: "10px" }}>
              <CCardText className="m-0">
                <strong>Username:</strong> {record.username}
              </CCardText>
              <CCardText className="m-0">
                <strong>Email Address:</strong> {record.email}
              </CCardText>
              <CCardText className="m-0">
                <strong>Registration Date:</strong> {record.registrationDate}
              </CCardText>
            </div>

            {}
            <CButton color="primary" href="#" size="sm" className="p-0 m-0 mt-2">
              View Details
            </CButton>
          </CCardBody>
        </CCard>
      ))}
    </div>
  );
};

export default Card;

