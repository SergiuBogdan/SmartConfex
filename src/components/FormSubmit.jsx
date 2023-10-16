const FormSubmit = () => {
  return (
    <form
      action="https://formsubmit.co/9e4963c4078efc3ca497d5f8a07ce108"
      method="POST"
    >
      <input type="text" name="name" required />
      <input type="email" name="email" required />
      <input type="message" name="message" required />
      <button type="submit">Send</button>
    </form>
  );
};

export default FormSubmit;
