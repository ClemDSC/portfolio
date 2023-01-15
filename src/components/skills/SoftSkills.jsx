export default function SoftSkills() {
  const softSkillList = [
    "communication",
    "humble",
    "collaboration / team work",
    "organization",
    "persevering",
    "emotional intelligence",
    "problem solving",
    "creativity",
    "owning up to errors",
    "calm",
    "patient",
    "curious",
    "sense of confidentiality",
  ];

  return (
    <div>
      <p className="text-2xl mb-2">SoftSkills</p>
      <div className="flex gap-2 flex-wrap text-lg font-Tourney font-bold">
        {softSkillList.map((skill) => {
          return <p className="hover:font-medium">{skill}</p>;
        })}
      </div>
    </div>
  );
}
