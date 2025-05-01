document.addEventListener('DOMContentLoaded', () => {
    // Mock Data
    const totalTests = 15;
    const totalUsers = 50;
    const averageScore = 78;
  
    const performanceData = [50, 60, 75, 80, 85, 90, 95]; 
    const testCompletionData = [30, 40, 25, 20, 5]; 
  
    // Update Stats
    document.getElementById('total-tests').textContent = totalTests;
    document.getElementById('total-users').textContent = totalUsers;
    document.getElementById('average-score').textContent = `${averageScore}%`;
  
    // Performance Trends Chart
    const performanceCtx = document.getElementById('performance-chart').getContext('2d');
    new Chart(performanceCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Average Performance',
            data: performanceData,
            borderColor: '#002147',
            backgroundColor: 'rgba(0, 33, 71, 0.1)',
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  
    // Test Completion Breakdown Chart
    const testBreakdownCtx = document.getElementById('test-breakdown-chart').getContext('2d');
    new Chart(testBreakdownCtx, {
      type: 'doughnut',
      data: {
        labels: ['Math', 'Science', 'History', 'English', 'Others'],
        datasets: [
          {
            data: testCompletionData,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  });
  