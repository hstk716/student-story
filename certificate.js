// FIXED: No more import error. We use the global window.jspdf loaded by HTML.
export async function generateCertificate() {
  // 1. Check for data
  const data = JSON.parse(localStorage.getItem("student_data"));
  if (!data || !data.studentName) return alert("Fill form first!");

  // 2. Get jsPDF from the window (loaded via script tag in HTML)
  const { jsPDF } = window.jspdf;

  // 3. Setup PDF
  const doc = new jsPDF({ orientation: "landscape", unit: "px", format: [800, 600] });
  const img = new Image();
  img.src = "certificate.jpeg"; 

  img.onload = function () {
    doc.addImage(img, "PNG", 0, 0, 800, 600);
    
    doc.setFont("helvetica", "bold");
    doc.setTextColor(50, 50, 50);
    doc.setFontSize(40);

    // Coordinates: x=400 (center), y=390 (vertical position)
    doc.text(data.studentName, 400, 470, { align: "center" });
    
    doc.save(`${data.studentName}_Certificate.pdf`);
  };
  
  img.onerror = () => alert("Error: certificate.png not found in folder!");
}