# Trackr

Trackr is a task tracking application built using ReactJS (frontend) and Flask (backend). You can run this locally to track your mountains of work. 

## Installation

Make sure you have Node. Preferably the latest version. 

Make sure to Git clone this repo. Then navigate and go inside the directory with the Pipfile in it. 

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install pipenv. You will need pipenv pretty soon. 

```bash
pip install pipenv
```

Now that you have pipenv, use it as follows:

```bash
pipenv install
```

This will install all of the dependencies listed in the Pipfile, required to make the API work. These dependencies include Flask and FlaskSQLAlchemy. 

Now, install Node dependencies. To do this, run: 

```bash
npm i
```

Wow. Installation is complete.

## Startup and Shutdown

Now to actually turn on Trackr. Simply run:

```bash
npm run trackr
```

If installation was done correctly, a window should popup on Port 3000. This is Trackr. This one command also runs the Flask API on Port 5000. Keep the command prompt window that is running Trackr open. Otherwise, Trackr will not work. 

To exit, just press Ctrl+C on the command window. This will interrupt Trackr and will also close the connection to the Flask API. Close the window and continue on. 

## Usage

Press clearly marked buttons such as Add, Remove and Update Tasks to utilize the CRUD functionality of Trackr. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Code is messy and unregulated.

Please make sure to update tests as appropriate.