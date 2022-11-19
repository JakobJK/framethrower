-- Deploy flipr:framethrower_public.view.v_instructor_admin to pg

begin;

    create view framethrower_public.v_admin_instructor as
        select id, profile_id, status, accepted_agreement, created_at, updated_at, biography, banner, availability from framethrower_public.instructor;

    comment on view framethrower_public.v_admin_instructor is '@foreignKey (profile_id) references framethrower_public.profile';

    grant select on framethrower_public.v_admin_instructor to framethrower_admin;

commit;