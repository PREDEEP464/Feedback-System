import { Hono } from 'hono';
import { cors } from 'hono/cors';

type Bindings = {
  FEEDD1: D1Database;
}

const app = new Hono<{ Bindings: Bindings }>();

app.use(
  '/*',
  cors({
    origin: 'http://localhost:5173',
    allowMethods: ['POST', 'GET', 'OPTIONS', 'DELETE'],
  })
);

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

//--------------------------------------------------------------

//Food Ratings
app.post('/food/awesome', async (c) => {
  try {
    const updateResult = await c.env.FEEDD1.prepare(
      'UPDATE food SET Awesome = Awesome + 1' 
    ).run();

    if (updateResult.error) {
      console.error('Database error:', updateResult.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json({ message: 'Awesome rating updated successfully' }); 
  } catch (error) {
    console.error('Error updating "Awesome" rating:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
});

app.post('/food/good', async (c) => {
  try {
    const updateResult = await c.env.FEEDD1.prepare(
      'UPDATE food SET Good = Good + 1' 
    ).run();

    if (updateResult.error) {
      console.error('Database error:', updateResult.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json({ message: 'Good rating updated successfully' }); 
  } catch (error) {
    console.error('Error updating "Good" rating:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
});

app.post('/food/average', async (c) => {
  try {
    const updateResult = await c.env.FEEDD1.prepare(
      'UPDATE food SET Average = Average + 1' 
    ).run();

    if (updateResult.error) {
      console.error('Database error:', updateResult.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json({ message: 'Average rating updated successfully' }); 
  } catch (error) {
    console.error('Error updating "Average" rating:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
})

app.post('/food/poor', async (c) => {
  try {
    const updateResult = await c.env.FEEDD1.prepare(
      'UPDATE food SET Poor = Poor + 1' 
    ).run();

    if (updateResult.error) {
      console.error('Database error:', updateResult.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json({ message: 'Poor rating updated successfully' }); 
  } catch (error) {
    console.error('Error updating "Poor" rating:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
})

app.post('/food/worst', async (c) => {
  try {
    const updateResult = await c.env.FEEDD1.prepare(
      'UPDATE food SET Worst = Worst + 1' 
    ).run();

    if (updateResult.error) {
      console.error('Database error:', updateResult.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json({ message: 'Very Poor rating updated successfully' }); 
  } catch (error) {
    console.error('Error updating "Very Poor" rating:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
})

app.get('/allfoodratings', async (c) => {
  try {
    const result = await c.env.FEEDD1.prepare('SELECT * FROM food').all();

    if (result.error) {
      console.error('Database error:', result.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json(result.results);
  } catch (error) {
    console.error('Error fetching ratings:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
});

//--------------------------------------------------------------

//Cost Ratings
app.post('/cost/awesome', async (c) => {
  try {
    const updateResult = await c.env.FEEDD1.prepare(
      'UPDATE cost SET Awesome = Awesome + 1' 
    ).run();

    if (updateResult.error) {
      console.error('Database error:', updateResult.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json({ message: 'Awesome rating updated successfully' }); 
  } catch (error) {
    console.error('Error updating "Awesome" rating:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
});

app.post('/cost/good', async (c) => {
  try {
    const updateResult = await c.env.FEEDD1.prepare(
      'UPDATE cost SET Good = Good + 1' 
    ).run();

    if (updateResult.error) {
      console.error('Database error:', updateResult.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json({ message: 'Good rating updated successfully' }); 
  } catch (error) {
    console.error('Error updating "Good" rating:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
});

app.post('/cost/average', async (c) => {
  try {
    const updateResult = await c.env.FEEDD1.prepare(
      'UPDATE cost SET Average = Average + 1' 
    ).run();

    if (updateResult.error) {
      console.error('Database error:', updateResult.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json({ message: 'Average rating updated successfully' }); 
  } catch (error) {
    console.error('Error updating "Average" rating:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
})

app.post('/cost/poor', async (c) => {
  try {
    const updateResult = await c.env.FEEDD1.prepare(
      'UPDATE cost SET Poor = Poor + 1' 
    ).run();

    if (updateResult.error) {
      console.error('Database error:', updateResult.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json({ message: 'Poor rating updated successfully' }); 
  } catch (error) {
    console.error('Error updating "Poor" rating:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
})

app.post('/cost/worst', async (c) => {
  try {
    const updateResult = await c.env.FEEDD1.prepare(
      'UPDATE cost SET Worst = Worst + 1' 
    ).run();

    if (updateResult.error) {
      console.error('Database error:', updateResult.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json({ message: 'Very Poor rating updated successfully' }); 
  } catch (error) {
    console.error('Error updating "Very Poor" rating:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
})

app.get('/allcostratings', async (c) => {
  try {
    const result = await c.env.FEEDD1.prepare('SELECT * FROM cost').all();

    if (result.error) {
      console.error('Database error:', result.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json(result.results);
  } catch (error) {
    console.error('Error fetching ratings:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
});

//--------------------------------------------------------------

//Quality Ratings
app.post('/quality/awesome', async (c) => {
  try {
    const updateResult = await c.env.FEEDD1.prepare(
      'UPDATE quality SET Awesome = Awesome + 1' 
    ).run();

    if (updateResult.error) {
      console.error('Database error:', updateResult.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json({ message: 'Awesome rating updated successfully' }); 
  } catch (error) {
    console.error('Error updating "Awesome" rating:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
});

app.post('/quality/good', async (c) => {
  try {
    const updateResult = await c.env.FEEDD1.prepare(
      'UPDATE quality SET Good = Good + 1' 
    ).run();

    if (updateResult.error) {
      console.error('Database error:', updateResult.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json({ message: 'Good rating updated successfully' }); 
  } catch (error) {
    console.error('Error updating "Good" rating:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
});

app.post('/quality/average', async (c) => {
  try {
    const updateResult = await c.env.FEEDD1.prepare(
      'UPDATE quality SET Average = Average + 1' 
    ).run();

    if (updateResult.error) {
      console.error('Database error:', updateResult.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json({ message: 'Average rating updated successfully' }); 
  } catch (error) {
    console.error('Error updating "Average" rating:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
})

app.post('/quality/poor', async (c) => {
  try {
    const updateResult = await c.env.FEEDD1.prepare(
      'UPDATE quality SET Poor = Poor + 1' 
    ).run();

    if (updateResult.error) {
      console.error('Database error:', updateResult.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json({ message: 'Poor rating updated successfully' }); 
  } catch (error) {
    console.error('Error updating "Poor" rating:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
})

app.post('/quality/worst', async (c) => {
  try {
    const updateResult = await c.env.FEEDD1.prepare(
      'UPDATE quality SET Worst = Worst + 1' 
    ).run();

    if (updateResult.error) {
      console.error('Database error:', updateResult.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json({ message: 'Very Poor rating updated successfully' }); 
  } catch (error) {
    console.error('Error updating "Very Poor" rating:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
})

app.get('/allqualityratings', async (c) => {
  try {
    const result = await c.env.FEEDD1.prepare('SELECT * FROM quality').all();

    if (result.error) {
      console.error('Database error:', result.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json(result.results);
  } catch (error) {
    console.error('Error fetching ratings:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
});

//--------------------------------------------------------------

//Customer Details
app.post('/details', async (c) => {
  try {
    const { name, email, phone } = await c.req.json();

    const statement = `
      INSERT INTO details (name, email, phone)
      VALUES (?, ?, ?)
    `;

    const result = await c.env.FEEDD1.prepare(statement).bind(name, email, phone).run();
    
    if (result.error) {
      console.error('Database error:', result.error);
      return c.json({ error: 'Database Error', details: result.error }, 500);
    }

    return c.json({ success: true });
  } catch (error) {
    console.error('Error handling request:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
});

app.get('/alldetails', async (c) => {
  try {
    const result = await c.env.FEEDD1.prepare('SELECT * FROM details').all();

    if (result.error) {
      console.error('Database error:', result.error);
      return c.json({ error: 'Database Error' }, 500);
    }

    return c.json(result.results);
  } catch (error) {
    console.error('Error fetching ratings:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
});

//--------------------------------------------------------------

export default app;
