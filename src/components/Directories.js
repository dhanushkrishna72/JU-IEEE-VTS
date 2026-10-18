function Directories() {
  const members = [
    {
      initials: "DK",
      name: "Dhanush K",
      role: "Student Chair",
      image: "/team/dhanush.jpg",
      color: "#ef2929",
      tag: "Lead",
    },
    {
      initials: "GS",
      name: "Gokul A S",
      role: "Student Co-Chair",
      image: "/team/gokul.jpg",
      color: "#4c9bd3",
      tag: "Lead",
    },
    {
      initials: "DA",
      name: "Devraj Adhikary",
      role: "General Secretary",
      image: "/team/devraj.jpg",
      color: "#f5aa25",
      tag: "Admin",
    },
    {
      initials: "KR",
      name: "Konark Roy",
      role: "Treasurer",
      image: "/team/konark.jpg",
      color: "#8b5cf6",
      tag: "Finance",
    },
    {
      initials: "KD",
      name: "Kartik Dipin Raval",
      role: "Creative Lead",
      image: "/team/kartik.jpg",
      color: "#18a878",
      tag: "Social Media",
    },
    {
      initials: "NA",
      name: "Nandhitha",
      role: "Web Master",
      image: "/team/nandhitha.jpg",
      color: "#e85d9e",
      tag: "Admin",
    },
  ];

  return (
    <div>
      <div className="section-header">
        <h2 className="section-title">Directors</h2>
      </div>

      <div className="team-grid">
        {members.map((member, index) => (
          <div
            className="member-card"
            key={member.name}
            style={{
              "--card-color": member.color,
              "--delay": `${index * -0.7}s`,
            }}
          >
            <div className="badge-clip">
              <span></span>
            </div>

            <div className="member-card-top">
              <div className="member-brand">
                <div className="member-brand-main">IEEE VTS</div>
                <div className="member-brand-sub">JAIN UNIVERSITY</div>
              </div>

              {/* <div className="member-photo-wrap">
                <div className="member-photo">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.querySelector(
                        "span",
                      ).style.display = "flex";
                    }}
                  />
                  <span>{member.initials}</span>
                </div>
              </div> */}
            </div>

            <div className="member-card-bottom">
              <div className="member-name">{member.name}</div>

              <div className="member-role">{member.role}</div>

              <div className="member-divider"></div>

              <div className="member-meta">
                <div className="member-category">STUDENT CHAPTER</div>

                <div className="member-tag">{member.tag}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Directories;
