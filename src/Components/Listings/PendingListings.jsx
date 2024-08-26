import React, { useState, useEffect } from 'react';
import Login from './Login';

const PendingListings = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pendingListings, setPendingListings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchPendingListings = async () => {
        try {
          const response = await fetch('https://server-two-livid.vercel.app/api/pending-listings');
          if (!response.ok) {
            throw new Error('Failed to fetch pending listings');
          }
          const data = await response.json();
          setPendingListings(data);
        } catch (err) {
          setError(err.message);
        }
      };

      fetchPendingListings();
    }
  }, [isAuthenticated]);

  const handleApprove = async (id) => {
    try {
      const response = await fetch('https://server-two-livid.vercel.app/api/approve-listing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setPendingListings(pendingListings.filter(listing => listing.ID !== id));
        alert('Listing approved');
      } else {
        alert('Failed to approve listing');
      }
    } catch (error) {
      console.error('Error approving listing:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await fetch('https://server-two-livid.vercel.app/api/reject-listing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setPendingListings(pendingListings.filter(listing => listing.ID !== id));
        alert('Listing rejected');
      } else {
        alert('Failed to reject listing');
      }
    } catch (error) {
      console.error('Error rejecting listing:', error);
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={setIsAuthenticated} />; 
  }

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Pending Listings</h1>
      {pendingListings.length > 0 ? (
        <ul>
          {pendingListings.map(listing => (
            <li key={listing.ID}>
              <p>{listing.Name_of_Place}</p>
              <button onClick={() => handleApprove(listing.ID)}>Approve</button>
              <button onClick={() => handleReject(listing.ID)}>Reject</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No pending listings.</p>
      )}
    </div>
  );
};

export default PendingListings;
