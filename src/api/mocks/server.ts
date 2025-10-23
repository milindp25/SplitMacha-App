// src/api/mocks/server.ts
/**
 * FIXED - User lookup that actually works!
 */

import { createServer, Model, Response } from 'miragejs';
import { mockUsers, mockGroups, mockExpenses, mockFriends, mockSettlements } from './data';

export function makeServer() {
  console.log('🚀 Creating MirageJS server...');

  return createServer({
    models: {
      user: Model,
      group: Model,
      expense: Model,
      friend: Model,
      settlement: Model,
    },

    seeds(server) {
      console.log('🌱 Seeding data...');
      
      mockUsers.forEach((u: any) => {
        server.create('user', u);
        console.log(`   ✅ Created user: ${u.email}`);
      });
      
      mockGroups.forEach((g: any) => server.create('group', g));
      mockExpenses.forEach((e: any) => server.create('expense', e));
      mockFriends.forEach((f: any) => server.create('friend', f));
      mockSettlements.forEach((s: any) => server.create('settlement', s));
      
      console.log(`✅ Seeded ${mockUsers.length} users`);
    },

    routes() {
      this.timing = 500;

      console.log('📡 Configuring routes with FULL PATHS');

      // ============================================
      // AUTH - LOGIN (FIXED)
      // ============================================

      this.post('http://localhost:3000/api/v1/auth/login', (schema, request) => {
        console.log('🔑 Login endpoint hit!');
        
        const { email, password } = JSON.parse(request.requestBody);
        console.log('   📧 Email received:', email);

        // Get all users as plain objects
        const allUsers = schema.db.users;
        console.log('   📊 Total users in DB:', allUsers.length);

        // Normalize search email
        const searchEmail = email.toLowerCase().trim();
        console.log('   🔍 Searching for:', searchEmail);

        // Find user - FIXED: proper iteration
        let foundUser = null;
        
        for (let i = 0; i < allUsers.length; i++) {
          const dbUser = allUsers[i];
          const dbEmail = dbUser.email.toLowerCase().trim();
          
          console.log(`   🔎 Checking user ${i}: "${dbEmail}"`);
          
          if (dbEmail === searchEmail) {
            foundUser = dbUser;
            console.log(`   ✅ MATCH FOUND!`);
            break;
          }
        }

        if (!foundUser) {
          console.log('   ❌ No match found after checking all users');
          return new Response(
            404,
            {},
            { 
              error: 'User not found',
              message: `No user with email: ${email}`,
              searched: searchEmail,
              available: allUsers.map((u: any) => u.email)
            }
          );
        }

        console.log('   ✅ User found:', foundUser.name);

        return {
          user: foundUser,
          token: `mock-token-${foundUser.id}`,
          message: 'Login successful',
        };
      });

      // ============================================
      // AUTH - REGISTER
      // ============================================

      this.post('http://localhost:3000/api/v1/auth/register', (schema, request) => {
        console.log('📝 Register endpoint hit!');
        
        const { name, email, password } = JSON.parse(request.requestBody);

        // Check if user exists
        const allUsers = schema.db.users;
        const searchEmail = email.toLowerCase().trim();
        
        let exists = false;
        for (let i = 0; i < allUsers.length; i++) {
          if (allUsers[i].email.toLowerCase().trim() === searchEmail) {
            exists = true;
            break;
          }
        }

        if (exists) {
          return new Response(
            409,
            {},
            { error: 'Conflict', message: 'User already exists' }
          );
        }

        // Create new user
        const newUser = schema.create('user', {
          id: `user-${Date.now()}`,
          name,
          email,
          phone: null,
          avatarUrl: 'https://i.pravatar.cc/150',
          firebaseUid: `firebase-${Date.now()}`,
          isActive: true,
          preferredCurrency: 'INR',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });

        console.log('   ✅ User registered:', newUser.attrs.name);

        return {
          user: newUser.attrs,
          token: `mock-token-${newUser.id}`,
          message: 'Registration successful',
        };
      });

      // ============================================
      // USERS
      // ============================================

      this.get('http://localhost:3000/api/v1/users', (schema) => {
        console.log('👥 Get all users');
        return schema.db.users;
      });

      this.get('http://localhost:3000/api/v1/users/:id', (schema, request) => {
        console.log('👤 Get user by ID:', request.params.id);
        
        const allUsers = schema.db.users;
        let user = null;
        
        for (let i = 0; i < allUsers.length; i++) {
          if (allUsers[i].id === request.params.id) {
            user = allUsers[i];
            break;
          }
        }
        
        return user || new Response(404, {}, { error: 'Not found' });
      });

      // ============================================
      // GROUPS
      // ============================================

      this.get('http://localhost:3000/api/v1/groups', (schema) => {
        return schema.db.groups;
      });

      this.post('http://localhost:3000/api/v1/groups', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const group = schema.create('group', {
          ...attrs,
          id: `group-${Date.now()}`,
          totalExpenses: 0,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        return group.attrs;
      });

      // ============================================
      // EXPENSES
      // ============================================

      this.get('http://localhost:3000/api/v1/expenses', (schema) => {
        return schema.db.expenses;
      });

      this.post('http://localhost:3000/api/v1/expenses', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const expense = schema.create('expense', {
          ...attrs,
          id: `expense-${Date.now()}`,
          status: 'ACTIVE',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        return expense.attrs;
      });

      // ============================================
      // FRIENDS
      // ============================================

      this.get('http://localhost:3000/api/v1/friends', (schema) => {
        return schema.db.friends;
      });

      // ============================================
      // SETTLEMENTS
      // ============================================

      this.get('http://localhost:3000/api/v1/settlements', (schema) => {
        return schema.db.settlements;
      });

      this.post('http://localhost:3000/api/v1/settlements', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const settlement = schema.create('settlement', {
          ...attrs,
          id: `settlement-${Date.now()}`,
          status: 'COMPLETED',
          settledAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
        });
        return settlement.attrs;
      });

      // ============================================
      // HEALTH
      // ============================================

      this.get('http://localhost:3000/api/v1/health', () => {
        return {
          status: 'UP',
          message: 'Mock API running',
          timestamp: new Date().toISOString(),
        };
      });

      console.log('✅ All routes configured');
    },
  });
}

export default makeServer;