<template>
  <div>
    <h1>Personal Profile Web Page</h1>
    
    <section>
      <h2>About Me</h2>
      <img :src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.6435-9/116731274_118026103338864_7024368847241138582_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeERD8VDOfXzwRtzebwwSQ3KIbh6xsNvwEghuHrGw2_ASHy367h9M05HNeGlgWQj0jpW84IANe86Filr2sXU6kMb&_nc_ohc=KlKCdNMg50kQ7kNvgHGhZCA&_nc_oc=Adh-eljErAvqbgHTxAiBJe2uqs_iHNkNDMOt-zE6O8CNyzsDIco9r2zy5s8VGKT3JlA&_nc_zt=23&_nc_ht=scontent.fmnl30-2.fna&_nc_gid=AYjp8lvb6B1SigjqvdhITC3&oh=00_AYCCRSCLFaFnlVMhdKi9xD_gSprqvgL_WJ8ORXCoSI7T7g&oe=67E37DF7" alt="Profile Picture" width="150">
      <p><strong>Name:</strong> {{ name }}</p>
      <p>{{ bio }}</p>
      <p><strong>Interests:</strong> {{ interests.join(', ') }}</p>
    </section>

    <section>
      <h2>Education & Achievements</h2>
      <table border="1">
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

    <section>
      <h2>IT Experience</h2>
      <ul>
        <li v-for="exp in itExperience" :key="exp">{{ exp }}</li>
      </ul>
    </section>

    <section>
      <h2>Memorable Photos</h2>
      <div>
        <img v-for="photo in memorablePhotos" :key="photo" :src="photo" alt="Memorable Photo" width="100">
      </div>
    </section>
    
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
      bio: "Currently studying BSCS - Cybersecurity & Forensics at Asia Pacific College.",
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
