const languages = [
  {
    name: "English",
    percentage: 100
  },
  {
    name: "Hindi",
    percentage: 100
  },
  {
    name: "Marathi",
    percentage: 100
  },
  {
    name: "Kannada",
    percentage: 35
  },
  {
    name: "Telugu",
    percentage: 35
  }
];

function Languages() {
  return (
    <section className="section languages-section" id="languages">

      <div className="section-heading">

        <p>COMMUNICATION</p>

        <h2>Languages</h2>

        <span></span>

      </div>

      <div className="language-list">

        {languages.map((language) => (
          <div className="language-card" key={language.name}>

            <div className="language-top">

              <span>{language.name}</span>

              <strong>
                {language.percentage}%
              </strong>

            </div>

            <div className="language-progress">

              <div
                className="language-progress-bar"
                style={{
                  width: `${language.percentage}%`
                }}
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Languages;