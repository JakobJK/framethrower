begin;
select plan(2);
select has_function(
    'framethrower_public',
    'register_animation',
    Array['text', 'integer', 'integer', 'text', 'text', 'uuid', 'uuid', 'boolean', 'text', 'boolean'],
    'register_animation exists'
);
select function_returns('framethrower_public', 'register_animation', 'framethrower_public.animation_submission', 'register_animation returns animation_submission');

select * from finish();
rollback;