<template>
  <div class="container">
    <header><h1>Personal Profile Web Page</h1></header>

    <main>
      <section class="main-content">
        <div>About Me</div>
        <p><strong>Name:</strong> {{ name }}</p>
        <p>{{ bio }}</p>

        <div>Education / Achievements</div>
        <ul>
          <li v-for="edu in education" :key="edu.level">
            {{ edu.level }} - {{ edu.program }} at {{ edu.school }} ({{ edu.year }}) - {{ edu.award }}
          </li>
        </ul>

        <div>Course</div>
        <p>{{ course }}</p>

        <div>IT Experience</div>
        <ul>
          <li v-for="exp in itExperience" :key="exp">{{ exp }}</li>
        </ul>

        <div>Hobbies & Interests</div>
        <p>{{ interests.join(', ') }}</p>

        <div>Goals In Life / Dreams</div>
        <p>{{ goals }}</p>

        <div>Picture Gallery</div>
        <div>
          <img v-for="photo in memorablePhotos" :key="photo" :src="photo" alt="Memorable Photo" width="100">
        </div>
      </section>

      <aside class="sidebar"></aside>
    </main>

    <footer>Asia Pacific College</footer>
  </div>
</template>

<script>
export default {
  name: "PersonalProfile",
  data() {
    return {
      name: "Ric Brian P. Boado",
      bio: "Currently studying Bachelor of Science in Computer Science with a specialization in Cybersecurity and Forensics at Asia Pacific College (APC), 2nd year.",
      course: "BSCS - Cybersecurity & Forensics",
      education: [
        { level: "College", program: "BSCS - Cybersecurity & Forensics", school: "Asia Pacific College", year: "2023-2027", award: "Honor Student" },
        { level: "Senior High", program: "TVL-ICT", school: "Pasay City South High School", year: "2017-2021", award: "With High Honors" },
        { level: "Junior High", program: "N/A", school: "Pasay City South High School", year: "2021-2023", award: "With High Honors" },
        { level: "Elementary", program: "N/A", school: "Villamor Air Base Elementary School", year: "2011-2017", award: "Honor Student" }
      ],
      itExperience: [
        "Building my own personal PC",
        "Simple coding projects with Python",
        "Tutorials on YouTube/courses about coding",
        "Basic Wireshark packet handling"
      ],
      interests: ["Video games", "Coding", "Anime", "Animation"],
      goals: "Pass the Philippine Military Academy and pursue a career in cybersecurity and forensics.",
      memorablePhotos: [
        "https://i.postimg.cc/dZRKCzfc/mphoto1.jpg",
        "https://i.postimg.cc/9rV22Q4m/mphoto2.jpg",
        "https://i.postimg.cc/Dm1hRXwp/mphoto3.jpg",
        "https://i.postimg.cc/CBq0hZH1/mphoto4.jpg"
      ]
    };
  }
};
</script>
