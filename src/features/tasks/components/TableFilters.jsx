const TableFilters = () => {
  return (
    <div>
      <input type="text" placeholder="Search tasks..." />
      <select name="" id="">
        <option value="">All Status</option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <select name="" id="">
        <option value="">All Priorities</option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <select name="" id="">
        <option value="">Sort by: Newest</option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <button>Clear Filters</button>
    </div>
  );
};

export default TableFilters;
