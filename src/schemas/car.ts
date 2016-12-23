export const carSchema = `
  # Car type
  type Car {
    # The model of the car
    model: String,
    # The car's license plate
    licensePlate: String,
    # The owner of the car
    owner: User
  }
`;
