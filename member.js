function skillsMember() {
  return {
    skills: ['JavaScript', 'React', 'Node', 'MongoDB', 'Express', 'CSS', 'HTML'],
    showSkills() {
      this.skills.forEach((skill) => console.log(skill));
    },
  };
}