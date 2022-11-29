import React, { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";

    document.body.appendChild(script);

    const listener = () => {
      if (window.hbspt) {
        // @TS-ignore

        window.hbspt.forms.create({
          region: "na1",
          portalId: "23220584",
          formId: "17746d2d-5cd7-4da7-b41b-6c85bc622c15",
          target: "#hubspotForm",
        });
      }
    };

    script.addEventListener("load", listener);
    return () => {
      script.removeEventListener("load", listener);
    };
  }, []);

  return <div className="contact"><div id="hubspotForm"></div></div> ;
};
export default ContactForm;
