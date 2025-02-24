<template>
  <div class="container">
    <header>
      <h1>Personal Profile Web Page</h1>
    </header>

    <main class="grid-container">
      <!-- About Me Section -->
      <section class="box-shadow">
        <h2>About Me</h2>
        <div class="flexbox">
          <img :src="profileImage" alt="Profile Picture" class="profile-img">
          <div>
            <p><strong>Name:</strong> {{ name }}</p>
            <p>{{ bio }}</p>
            <p><strong>Interests:</strong> {{ interests.join(', ') }}</p>
          </div>
        </div>
      </section>

      <!-- Education & Achievements -->
      <section class="box-shadow">
        <h2>Education & Achievements</h2>
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Program</th>
              <th>School</th>
              <th>Year</th>
              <th>Awards</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="edu in education" :key="edu.level">
              <td>{{ edu.level }}</td>
              <td>{{ edu.program }}</td>
              <td>{{ edu.school }}</td>
              <td>{{ edu.year }}</td>
              <td>{{ edu.award }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- IT Experience -->
      <section class="box-shadow">
        <h2>IT Experience</h2>
        <ul>
          <li v-for="exp in itExperience" :key="exp">{{ exp }}</li>
        </ul>
      </section>

      <!-- Memorable Photos -->
      <section class="box-shadow">
        <h2>Memorable Photos</h2>
        <div class="photos flexbox">
          <img v-for="photo in memorablePhotos" :key="photo" :src="photo" alt="Memorable Photo">
        </div>
      </section>
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
      profileImage: "https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.6435-9/116731274_118026103338864_7024368847241138582_n.jpg",
      bio: "Currently studying Bachelor of Science in Computer Science with a specialization in Cybersecurity and Forensics at Asia Pacific College (APC), 2nd year. Consistently an honor/high honor student throughout elementary, high school, and college.",
      interests: ["Video games", "Coding", "Anime", "Animation"],
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

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}
.grid-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.box-shadow {
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
}
.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}
.photos img {
  width: 100px;
  height: 100px;
  margin: 5px;
  border-radius: 10px;
}
</style>