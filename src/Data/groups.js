// Group data

const groups = [
  {
    id: 1,
    name: "Office",
    icon: "💼",
    balance: "+₹1200",
    members: [
      "Pallavi",
      "Rahul",
      "Priya"
    ],

    expenses: [
      {
        id: 1,
        title: "Team Lunch",
        amount: 1850,
        paidBy: "Pallavi",
        category: "🍕",
        date: "24 Jun 2026"
      },
      {
        id: 2,
        title: "Coffee",
        amount: 650,
        paidBy: "Rahul",
        category: "☕",
        date: "22 Jun 2026"
      }
    ]
  },

  {
    id: 2,
    name: "Friends",
    icon: "🧑‍🤝‍🧑",
    balance: "-₹850",
    members: [
      "Pallavi",
      "Aman",
      "Sneha",
      "Karan"
    ],

    expenses: [
      {
        id: 1,
        title: "Birthday Gift",
        amount: 2000,
        paidBy: "Pallavi",
        category: "🎁",
        date: "20 Jun 2026"
      },
      {
        id: 2,
        title: "Movie Night",
        amount: 1200,
        paidBy: "Aman",
        category: "🎬",
        date: "18 Jun 2026"
      }
    ]
  },

  {
    id: 3,
    name: "Family",
    icon: "🏠",
    balance: "+₹2500",
    members: [
      "Pallavi",
      "Mom",
      "Dad",
      "Brother",
      "Sister"
    ],

    expenses: [
      {
        id: 1,
        title: "Groceries",
        amount: 3500,
        paidBy: "Mom",
        category: "🛒",
        date: "21 Jun 2026"
      },
      {
        id: 2,
        title: "Electricity Bill",
        amount: 1800,
        paidBy: "Dad",
        category: "💡",
        date: "15 Jun 2026"
      }
    ]
  }
];

export default groups;