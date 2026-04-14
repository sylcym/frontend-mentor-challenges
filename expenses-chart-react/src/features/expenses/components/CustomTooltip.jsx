import PropTypes from "prop-types";

export default function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div
      style={{
        background: "#1f1f1f",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: "8px",
        fontSize: "14px",
      }}
    >
      <p style={{ margin: 0 }}>{label}</p>
      <p style={{ margin: 0, fontWeight: "bold" }}>
        ${payload[0].value}
      </p>
    </div>
  );

}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string,
};