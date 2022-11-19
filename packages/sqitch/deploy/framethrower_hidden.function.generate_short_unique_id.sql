-- Deploy flipr:framethrower_hidden.function.generate_short_unique_id to pg

begin;

create or replace function framethrower_hidden.generate_short_unique_id(tablename text, strength int)
returns text as $$
declare
  key text;
  qry text;
  found text;
begin
  qry := 'select id from ' || tablename || ' where id=';
  loop
    key := encode(gen_random_bytes(strength), 'base64');
    key := replace(key, '/', '_');
    key := replace(key, '+', '-');
    execute qry || quote_literal(key) into found;
    if found is null then
      exit;
    end if;
  end loop;
  return key;
end;
$$ language 'plpgsql';
commit;
