export default function Footer() {
  const CurrentYear = new Date().getFullYear();
  return (
    <footer className="foot">
      {" "}
      © {CurrentYear} My app development. All rights reserved.{" "}
    </footer>
  );
}
