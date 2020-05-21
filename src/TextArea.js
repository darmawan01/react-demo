import React from "react";

export const Text = ({ value }) => {
  return (
    <textarea
      cols={80}
      style={{ marginRight: 20 }}
      rows={13} defaultValue={value} />
  )
}