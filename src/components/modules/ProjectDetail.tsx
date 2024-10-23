import React, { useState } from 'react';

interface ProjectDetailProps {
  project: {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    progress: number;
    tasks: number;
    issues: number;
  };
  onSave: (project: any) => void;
  onDelete: (projectId: number) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onSave, onDelete }) => {
  const [projectDetails, setProjectDetails] = useState(project);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectDetails({ ...projectDetails, [name]: value });
  };

  const handleSave = () => {
    onSave(projectDetails);
  };

  const handleDelete = () => {
    onDelete(projectDetails.id);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">プロジェクト詳細</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            プロジェクト名
          </label>
          <input
            type="text"
            name="name"
            value={projectDetails.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
            開始日
          </label>
          <input
            type="date"
            name="startDate"
            value={projectDetails.startDate}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
            終了日
          </label>
          <input
            type="date"
            name="endDate"
            value={projectDetails.endDate}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="progress">
            進捗
          </label>
          <input
            type="number"
            name="progress"
            value={projectDetails.progress}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tasks">
            タスク
          </label>
          <input
            type="number"
            name="tasks"
            value={projectDetails.tasks}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="issues">
            課題
          </label>
          <input
            type="number"
            name="issues"
            value={projectDetails.issues}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            保存
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            削除
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectDetail;
