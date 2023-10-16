const NewForm = () => {
  return (
    <form>
      <h1>
        Contact <span>Here</span>
      </h1>
      <input type="text" name="name" id="" />
      <input type="email" name="email" id="" />
      <input type="phone" name="phone" id="" />
      <textarea name="message" id="" cols="30" rows="10" />
      <button type="submit">Send</button>
    </form>
  );
};

export default NewForm;
