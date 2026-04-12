import { Form, useActionData, useNavigation } from "react-router";

// The 'action' function handles the form submission on the server-side (v7 feature)
export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const phone = formData.get("phone");
  const message = formData.get("message");

  // This is where you would normally send the data to your lead management system (like ClickUp)
  console.log("New Lead Received:", { name, phone, message });

  return { 
    success: true, 
    message: "Thank you! Your inquiry has been submitted successfully. Our legal team will contact you shortly." 
  };
}

export default function Contact() {
  const actionData = useActionData(); // Catches the return from the action function
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div style={{ padding: '60px 10%', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#002147', textAlign: 'center' }}>Contact Our Legal Experts</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
        Get legal assistance for Court Marriage and Nikah registration.
      </p>

      {/* Success Message Display */}
      {actionData?.success && (
        <div style={{ padding: '15px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '5px', marginBottom: '20px', textAlign: 'center' }}>
          {actionData.message}
        </div>
      )}

      <Form method="post" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Full Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="e.g. Mohsin Ali" 
            required 
            style={inputStyle} 
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Phone Number / WhatsApp</label>
          <input 
            type="tel" 
            name="phone" 
            placeholder="0302-6644789" 
            required 
            style={inputStyle} 
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Case Requirements</label>
          <textarea 
            name="message" 
            rows="5" 
            placeholder="How can we help you?" 
            style={inputStyle}
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ 
            padding: '15px', 
            background: isSubmitting ? '#999' : '#002147', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          {isSubmitting ? "Submitting..." : "Send Message"}
        </button>
      </Form>

      <div style={{ marginTop: '50px', textAlign: 'center', borderTop: '1px solid #ddd', paddingTop: '30px' }}>
        <h4 style={{ margin: '5px' }}>Direct Helpline</h4>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#002147' }}>0302-6644789 / 0316-6644789</p>
      </div>
    </div>
  );
}

// Internal Styles
const formGroupStyle = { display: 'flex', flexDirection: 'column', gap: '5px' };
const labelStyle = { fontWeight: 'bold', color: '#333' };
const inputStyle = { padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem' };