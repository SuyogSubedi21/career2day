import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const getCvExportElement = () => (
  document.getElementById('smart-cv-template')
  || document.getElementById('cv-preview-content')
  || document.querySelector('.cv-preview-container')
  || document.getElementById('cv-print-area')
  || document.getElementById('resume-preview-content')
);

export const exportElementToPdf = async (element, fileName) => {
  if (!element) throw new Error('CV preview not found');

  const originalTransform = element.style.transform;
  const parent = element.parentElement;
  const originalParentTransform = parent?.style.transform;

  try {
    element.style.transform = 'none';
    if (parent) parent.style.transform = 'none';

    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgHeight = (canvas.height * pageWidth) / canvas.width;
    let y = 0;

    pdf.addImage(imgData, 'PNG', 0, y, pageWidth, imgHeight);
    while (imgHeight + y > pageHeight) {
      y -= pageHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, y, pageWidth, imgHeight);
    }

    pdf.save(fileName);
  } finally {
    element.style.transform = originalTransform;
    if (parent) parent.style.transform = originalParentTransform;
  }
};
