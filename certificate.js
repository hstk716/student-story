export async function generateCertificate() {
  const data = JSON.parse(localStorage.getItem("student_data"));

  if (!data || !data.studentName || !data.studentName.trim()) {
    alert("Student name missing. Please start again.");
    return;
  }

  const { jsPDF } = window.jspdf;

  const doc = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [800, 600],
  });

  const img = new Image();
  img.crossOrigin = "anonymous";

  img.onload = () => {
    doc.addImage(img, "JPEG", 0, 0, 800, 600);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(40);
    doc.setTextColor(0, 0, 0); // pure black

    // FORCE string rendering
    const name = String(data.studentName).trim();
   doc.text(name, 400, 485, {
        align: "center",
        baseline: "bottom"
    });
    doc.save(`${name}_Certificate.pdf`);
  };

  img.onerror = () => {
    alert("Error: certificate.jpeg not found!");
  };

  img.src = "certificate.jpeg";
}
