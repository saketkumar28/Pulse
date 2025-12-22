import express from "express";

export const signup = (req, res) => {
  res.json({ data: "U hit signup endpoint." });
};

export const login = (req, res) => {
  res.json({ data: "U hit login endpoint." });
};
export const logout = (req, res) => {
  res.json({ data: "U hit logout endpoint." });
};
