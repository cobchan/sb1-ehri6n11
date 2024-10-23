import React, { useState } from 'react';
import { Clipboard, Calendar, CheckSquare, AlertTriangle } from 'lucide-react';
import ProjectDetail from './ProjectDetail';

interface ProjectsProps {
  filter: 'all' | 'internal' | 'customer';
  setFilter: (filter: 'all' | 'internal' | 'customer') => void;
}

const Projects: React.FC<ProjectsProps> = ({ filter, setFilter }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, name: 'ウェブサイトリニューアル', startDate: '2024-04-01', endDate: '2024-06-30', progress: 25, tasks: 20, issues: 3, type: 'customer' },
    { id: 2, name: 'モバイルアプリ開発', startDate: '2024-05-15', endDate: '2024-09-30', progress: 10, tasks: 35, issues: 5, type: 'customer' },
    { id: 3, name: 'データ分析システム構築', startDate: '2024-06-01', endDate: '2024-08-31', progress: 0, tasks: 15, issues: 1, type: 'internal' },
    { id: 4, name: 'セキュリティ強化プロジェクト', startDate: '2024-07-01', endDate: '2024-09-15', progress: 5, tasks: 25, issues: 2, type: 'internal' },
    { id: 5, name: '社内トレーニングプログラム', startDate: '2024-08-01', endDate: '2024-10-31', progress: 0, tasks: 10, issues: 0, type: 'internal' },
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.type === filter;
  });

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleSave = (updatedProject) => {
    // Save logic here
  };

  const handleDelete = (projectId) => {
    // Delete logic here
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">プロジェクト管理</h1>
      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setFilter('all')}
        >
          すべて
        </button>
        <button
          className={`px-4 py-2 mr-2 ${filter === 'internal' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setFilter('internal')}
        >
          社内プロジェクト
        </button>
        <button
          className={`px-4 py-2 ${filter === 'customer' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setFilter('customer')}
        >
          顧客プロジェクト
        </button>
      </div>
      {selectedProject ? (
        <ProjectDetail project={selectedProject} onSave={handleSave} onDelete={handleDelete} />
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">プロジェクト名</th>
              <th className="py-3 px-6 text-left">期間</th>
              <th className="py-3 px-6 text-left">進捗</th>
              <th className="py-3 px-6 text-left">タスク</th>
              <th className="py-3 px-6 text-left">課題</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredProjects.map((project) => (
              <tr key={project.id} className="border-b border-gray-200 hover:bg-gray-100" onClick={() => handleProjectSelect(project)}>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <Clipboard className="mr-2" />
                    <span>{project.name}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <Calendar className="mr-2" />
                    <span>{project.startDate} 〜 {project.endDate}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                  </div>
                  <span className="text-xs">{project.progress}%</span>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <CheckSquare className="mr-2" />
                    <span>{project.tasks}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <AlertTriangle className="mr-2" />
                    <span>{project.issues}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Projects;
