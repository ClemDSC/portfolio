export default function HardSkills() {
  const hardSkillList = [
    "javascript",
    "typescript",
    "java",
    "react",
    "angular",
    "nodejs",
    "express",
    "spring",
    "mysql",
    "prisma",
    "styled components",
    "tailwind",
    "material ui",
    "chakra ui",
    "api",
    "vscode",
    "intellij",
    "git",
    "github",
  ];

  return (
    <div>
      <p className="text-2xl mb-2">HardSkills</p>
      <div className="flex gap-2 flex-wrap text-lg font-Tourney font-bold">
        {hardSkillList.map((skill) => {
          return <p className="hover:font-medium">{skill}</p>;
        })}
      </div>
    </div>
  );
}
