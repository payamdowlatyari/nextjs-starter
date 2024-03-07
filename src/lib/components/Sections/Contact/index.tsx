import Social from "../Title/Social";
import Email from "./Email";
import External from "./External";

export default function Contact() {
  return (
    <div className="contacts">
      <div>
        <h5 className="small-title">Contact</h5>
        <Email />
      </div>

      <div>
        <div>
          <h5 className="small-title">Follow</h5>
          <Social />
        </div>

        <div>
          <h5 className="small-title">Links</h5>
          <External />
        </div>
      </div>
    </div>
  );
}
