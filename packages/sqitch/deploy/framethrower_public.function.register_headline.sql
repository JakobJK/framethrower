-- Deploy flipr:framethrower_public.function.register_headline to pg

begin;

create or replace function framethrower_public.register_headline(thumbnail_ text, link_ text, title_ text)
  returns framethrower_public.headline as $$
    insert into framethrower_public.headline
    (thumbnail, title, link) values (thumbnail_, title_, link_) returning *;
    $$ language sql;
  grant execute on function framethrower_public.register_headline(text, text, text) to framethrower_admin;

commit;
