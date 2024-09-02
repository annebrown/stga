import donations from "./donations";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="w-1/3 rounded-lg bg-white px-8 py-0 my-0 shadow-three">
          <h2 className="mb-3 text-2xl font-bold text-black  sm:text-3xl lg:text-2xl xl:text-3xl">
            Details
          </h2>
          <p className="mb-12 text-base font-medium text-body-color">
            E-Transfer <strong>Send To</strong> Address:
              <br /><strong>donations@savethegrove.com</strong><br /><br />
            Security Question:<br />
            Security Answer:
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
