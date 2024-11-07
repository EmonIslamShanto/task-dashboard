import Column from "./Column";
const columnsData = [
  { title: "Incomplete", color: "bg-red-600" },
  { title: "To Do", color: "bg-blue-600" },
  { title: "Doing", color: "bg-yellow-500" },
  { title: "Under Review" },
  { title: "Completed" },
  { title: "Overdue" },
];

const Dashboard = () => {
  return (
    <div className="flex overflow-x-auto p-5 bg-gray-100 min-h-screen">
      {columnsData.map((column, index) => (
        <Column key={index} title={column.title} color={column.color} />
      ))}
    </div>
  );
};

export default Dashboard;
