import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Form.css"; 

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Submitted Data:", data);
    
    try {
      const response = await axios.post("https://lead-form-brown.vercel.app/api/send-data", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (response.data.success) {
        alert("Data successfully sent to Zapier");
      } else {
        alert("Data was sent to the server but not forwarded to Zapier");
      }
      console.log("Server Response:", response.data);
    } catch (error) {
      alert("Error sending data: " + error.message);
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="form-container full-width">
      <h2 className="form-title">Caller Lead Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
        <div className="form-grid">
          {[
            { label: "Property Address Full *", name: "propertyAddress", required: true },
            { label: "Address *", name: "address", required: true },
            { label: "City *", name: "city", required: true },
            { label: "Zip *", name: "zip", required: true },
            { label: "Caller Name (Cold Caller Name) *", name: "callerName", required: true },
            { label: "Contact Name *", name: "contactName", required: true },
            { label: "Phone *", name: "phone", required: true },
            { label: "Email", name: "email", required: false },
            { label: "Tag (Campaign Name: Example Cuyahoga County Probate) *", name: "tag", required: true },
            { label: "How much are you looking to sell the house for?", name: "sellPrice", required: false },
            { label: "What's the minimum you will accept if we offered you an all-cash, no contingency offer and closed in under 10 days?", name: "minCashOffer", required: false },
            { label: "How much is the mortgage on the house?", name: "mortgage", required: false },
            { label: "How soon are you looking to sell?", name: "sellTime", required: false },
            { label: "Is house vacant or occupied?", name: "occupancy", required: false },
            { label: "Why are you looking to sell the house?", name: "reasonToSell", required: false },
            { label: "Have you received any past due notice from the lender?", name: "pastDueNotice", required: false },
            { label: "Number of Bedrooms", name: "bedrooms", required: false },
            { label: "Number of Bathrooms", name: "bathrooms", required: false },
            { label: "Repairs and Renovations", name: "repairs", required: false },
            { label: "Owners Condition Rating (1-10)", name: "conditionRating", required: false },
            { label: "Any Recent Updates?", name: "recentUpdates", required: false },
            { label: "Major or Minor Issues", name: "issues", required: false },
            { label: "Call Back Time", name: "callBackTime", required: false },
            { label: "Miscellaneous Notes", name: "miscNotes", required: false },
          ].map(({ label, name, required }) => (
            <div key={name} className="form-group grid-item responsive">
              <label className="form-label">{label}</label>
              <input {...register(name, { required })} className="form-input text-center" />
              {errors[name] && <p className="form-error">{label} is required</p>}
            </div>
          ))}
        </div>

        <button type="submit" className="form-button responsive">Submit</button>
      </form>
    </div>
  );
};

export default DynamicForm;