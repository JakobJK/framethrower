-- Deploy framethrower:framethrower_public.function.company_create_group to pg

begin;

  create or replace function framethrower_public.company_create_group(
    name_ text, description_ text default null
    )returns framethrower_public.company_pro_group as $$
    declare company_id_ uuid;
    declare group_ framethrower_public.company_pro_group;
    begin
      select company_id from framethrower_public.company_admin_users where company_admin_users.profile_id = current_setting('jwt.claims.id', true)::uuid into company_id_;
      if company_id_ is null then
        return null;
      else
        insert into framethrower_public.company_pro_group (company_id, group_name, description, slug) values (company_id_, name_, description_, framethrower_public.slugify(name_)) returning * into group_;
        return group_;
      end if;
    end;
  $$ language plpgsql security definer;


grant execute on function framethrower_public.company_create_group(text, text) to framethrower_user, framethrower_moderator, framethrower_admin;

commit;
