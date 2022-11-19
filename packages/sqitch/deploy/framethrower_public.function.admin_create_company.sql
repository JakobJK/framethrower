-- Deploy flipr:framethrower_public.function.create_company to pg

begin;
  create or replace function framethrower_public.admin_create_company(
    url_ text,
    name_ text,
    logo_ text,
    link_ text,
    description_ text,
    public_ boolean,
    address_ json,
    company_id_ uuid
    )returns framethrower_public.company as $$
      insert into framethrower_public.company (
        name,
        name_url_safe,
        link,
        logo,
        description,
        public,
        address
      ) values (
        name_,
        framethrower_public.slugify(name_),
        link_,
        logo_,
        description_,
        public_,
        address_
      ) returning *;
  $$ language sql;
  grant execute on function framethrower_public.admin_create_company(text, text, text, text, text, boolean, json, uuid) to framethrower_admin;

commit;