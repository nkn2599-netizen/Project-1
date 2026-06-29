import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>

      <p style={styles.text}>
        Welcome to Paradise Nursery. We are passionate about bringing fresh,
        healthy, and high-quality plants to your home and workspace.
      </p>

      <p style={styles.text}>
        Our mission is to make gardening simple and enjoyable for everyone,
        whether you're a beginner or an experienced plant lover. We carefully
        select and nurture each plant to ensure it thrives in your environment.
      </p>

      <p style={styles.text}>
        We specialize in indoor plants, outdoor plants, and decorative greenery
        that help create a peaceful and refreshing atmosphere.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  text: {
    marginBottom: "15px",
    fontSize: "16px",
  },
};

export default AboutUs;