# pgTap for SQL testing

Install pgTap, pg_prove (and perl if needed). Initialize pgTap in your DB.

You now have pg_prove commmand-line tool to execute the functions written in the test directory.


TODO: We need to execute this in a containerized form, so we don't rely on what ever dependencies the developer has installed.


Steps to making it work.
- Download and compile pgTap
- Run the compiled sql file against your development postgres instance using psql
- Install pg_prove
- If "pg_prove command" is not found, we need to generate a symlink.

Run the command

```bash
find /usr/local -name pg_prove
```

It will likely give you a result something like "/usr/local/Cellar/perl/5.32.0/bin/pg_prove"

Generate a symlink using this command:

```bash
ln -s /usr/local/Cellar/perl/5.32.0/bin/pg_prove /usr/local/bin/pg_prove
```

Now you are able to use the command "pg_prove" in the terminal.

To run the tests, you can now in the sqitch directory write out:

```bash
pg_prove -h localhost -U framethrower -p 2345 -U framethrower tests/**/*.sql
```

(If you want to avoid being prompted for the password, you can set an environment variable in the terminal, that psql recognizes as the password for the database: export PGPASSWORD=framethrower)

You can add the -v flag to run the pg_prove in verbose mode, which will display the name and execution of all subtests

## Writing tests - Unit Testing

Here are a couple of examples of the bare minimum to test for:

### Tables

- Test table exists with matching column names
- Test Primary and foreign keys
- Test column types
- Test table constraints
- Testing an insert that will succeed (test default values)
- Test the insertion of data that will intentionally fail

### Functions

- Test the function exists
- Test parameter types
- Test return type
