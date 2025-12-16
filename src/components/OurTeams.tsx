import { useState } from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Raharjo Marsetyo Prabowo",
    role: "Director of PT Arete Indonesia",
    image: "https://res.cloudinary.com/dbbzu2sxo/image/upload/v1763107694/Gemini_Generated_Image_baiubfbaiubfbaiu__1_-removebg-preview_nvybgy.png",
    detailImage: "https://res.cloudinary.com/dbbzu2sxo/image/upload/v1763107694/Gemini_Generated_Image_baiubfbaiubfbaiu__1_-removebg-preview_nvybgy.png",
    details: {
      appointment: "Deed No. 58 dated 28 June 2023",
      birth: "Born in 1948, Indonesian Citizen",
      education: "Diplom Ingenieur (Dipl.Ing.) from Technische Universitaet Muenchen (TUM), majoring in Electronics, specializing in Computer Science in 1974",
      positions: [
        "President Commissioner of PT Samudera Indonesia Tbk (2008–now)",
        "President Commissioner of PT Samudera Indonesia Tangguh (2019–now)",
        "Member of Nomination and Remuneration Committee of PT Samudera Indonesia Tbk (2018–now)"
      ]
    }
  },
];

const OurTeams = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <div className="w-full py-16 px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            BOARD OF DIRECTORS
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer w-full sm:w-80 flex-shrink-0"
            >
              <div className="relative mb-6 overflow-hidden rounded-t-3xl bg-gradient-to-b from-blue-100 to-blue-50 h-80">
                <div
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundPosition: 'center bottom'
                  }}
                />
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 -mt-8 mx-4 relative z-10 transition-all duration-300 group-hover:shadow-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <div className="w-16 h-1 bg-blue-600 mb-3"></div>
                <p className="text-sm text-gray-600">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-2/5 bg-gradient-to-b from-blue-100 to-blue-50 relative">
              <div
                className="w-full h-64 md:h-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${selectedMember.detailImage})`,
                  backgroundPosition: 'center bottom'
                }}
              />
            </div>

            <div className="md:w-3/5 flex flex-col">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      {selectedMember.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {selectedMember.role}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
                  >
                    ×
                  </button>
                </div>
                <div className="w-16 h-1 bg-blue-600 mt-4"></div>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">
                      Date and Legal Basis of Appointment:
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {selectedMember.details.appointment}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">
                      Birth and Nationality:
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {selectedMember.details.birth}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">
                      Educational Background:
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {selectedMember.details.education}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">
                      Current Positions:
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedMember.details.positions.map((position, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">
                          {position}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTeams;