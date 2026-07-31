// Personal Finance Dashboard - Savings Calculation Logic

function calculateSavings(income, expenses, targetGoal) {
  // 1. Calculate Net Savings (Income - Expenses)
  const netSavings = Math.max(0, income - expenses);
  
  // 2. Calculate remaining amount needed to reach target
  const remaining = Math.max(0, targetGoal - netSavings);
  
  // 3. Calculate percentage progress
  const percentage = Math.min(100, ((netSavings / targetGoal) * 100)).toFixed(1);

  // 4. Update HTML Elements
  document.getElementById('savings-amount').innerText = `$${netSavings.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  document.getElementById('savings-target').innerText = `$${targetGoal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  document.getElementById('savings-percent').innerText = `${percentage}%`;
  document.getElementById('savings-remaining').innerText = `$${remaining.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

  // 5. Update Progress Bar width
  const progressBar = document.getElementById('savings-progress');
  progressBar.style.width = `${percentage}%`;

  // 6. Update Status Badge dynamically
  const statusBadge = document.getElementById('savings-status');
  
  if (percentage >= 100) {
    statusBadge.innerText = 'Goal Reached';
    statusBadge.className = 'status-badge success-badge';
  } else if (percentage >= 70) {
    statusBadge.innerText = 'On Track';
    statusBadge.className = 'status-badge success-badge';
  } else {
    statusBadge.innerText = 'Behind Target';
    statusBadge.className = 'status-badge warning-badge';
  }
}

// Example usage:
// Income: $5,000 | Expenses: $2,550 | Monthly Target: $3,000
calculateSavings(5000, 2550, 3000);