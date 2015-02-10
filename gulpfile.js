/*
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulp/tasks. Any files in that directory get
  automatically required below.
  To add a new task, simply add a new task file that directory.
*/

// Require all tasks in gulp/tasks, including subfolders
require('require-dir')('./gulp/tasks', { recurse: true });
