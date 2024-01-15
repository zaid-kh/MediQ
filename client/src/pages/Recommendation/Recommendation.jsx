import React from "react";

import ChatHeader from "../../components/Header/ChatHeader";
import NavBar from "../../components/NavBar/NavBar";
import RecommendationCard from "../../components/RecommendationCard/RecommendationCard";
import { Slide } from "@mui/material";

const recommendationsArr = [
    {
        header: "Stay Hydrated",
        body: "Drink plenty of fluids such as water, herbal tea, and clear broth to stay hydrated.",
    },
    {
        header: "Rest",
        body: "Get plenty of rest to allow your body to recover.",
    },
    {
        header: "Warm Salt Gargle",
        body: "Gargle with warm salt water to soothe a sore throat.",
    },
    {
        header: "Use a Humidifier",
        body: "Use a humidifier in your room to add moisture to the air, which can help relieve congestion and soothe a dry throat.",
    },
    {
        header: "Over-the-Counter Medications",
        body: "Consider over-the-counter medications such as acetaminophen or ibuprofen for pain and fever relief. Nasal decongestants or saline nasal sprays may help relieve nasal congestion.",
    },
];

function Recomendation() {
    return (
        <Slide direction="right" in>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "15px",
                    padding: "0px 42px 22px 43px",
                    backgroundColor: "#393C49",
                    height: "100vh",
                }}
            >
                <div className="back-button" style={{ width: "100%" }}>
                    <ChatHeader />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "32px",
                        flexWrap: "wrap",
                    }}
                >
                    {recommendationsArr.map((rec, index) => (
                        <RecommendationCard
                            key={index}
                            header={rec.header}
                            body={rec.body}
                        />
                    ))}
                </div>
                <NavBar />
            </div>
        </Slide>
    );
}

export default Recomendation;
