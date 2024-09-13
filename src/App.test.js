test('renders quiz component', () => {
  render(<App />);
  const quizElement = screen.getByText(/Question 1/i);
  expect(quizElement).toBeInTheDocument();
});
