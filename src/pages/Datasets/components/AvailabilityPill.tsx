import Pill from "../../../components/Pill/Pill";

export default function AvailabilityPill({
  isAvailable,
}: {
  isAvailable: boolean;
}) {
  if (isAvailable)
    return (
      <Pill backgroundColor="#28a745" color="#ffffff">
        Available
      </Pill>
    );

  return (
    <Pill backgroundColor="#dc3545" color="#ffffff">
      Out of stock
    </Pill>
  );
}

export const availabilityFormatter = (isAvailable: boolean) => (
  <AvailabilityPill isAvailable={isAvailable} />
);
