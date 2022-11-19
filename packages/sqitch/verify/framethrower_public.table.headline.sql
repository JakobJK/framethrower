-- Verify flipr:framethrower_public.table.headline on pg

begin;

  select 1/count(*) from information_schema.tables
    where  table_schema = 'framethrower_public'
    and    table_name   = 'headline';

rollback;
