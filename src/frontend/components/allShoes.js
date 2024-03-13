import React, { useState, useEffect } from "react";

useEffect(() => {
    const fetchData = async (id) => {
        try {
            const res = await fetch(`/api/users/${id}/mygroups`); //aqui vai o [id]
            const data = await res.json();
            setGroups(data.userGroups); // Set groups to data.userGroups
        } catch (error) {
            console.error("Error fetching groups:", error);
        }
    };

    fetchData(user.userData._id); // Pass the user ID
}, []);